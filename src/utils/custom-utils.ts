/**
 * Fetches and returns the latest version of a package from PyPI.
 *
 * @param {string} package_name - The name of the package to fetch the version for.
 * @param {string} package_url - The URL of the package on PyPI.
 * @return {Promise<string>} A promise that resolves with the latest version of the package, or an empty string if there was an error.
 *
 * @throws {Error} Throws an error if there is a problem fetching the package version from PyPI.
 *
 */
export async function fetchPyPIVersion(package_name: string, package_url: string): Promise<string> {
  try {
    const response = await fetch(package_url + '/json');
    const data = await response.json();
    const latestVersion = data.info.version;
    console.log('Latest ' + package_name + ' Version: ' + latestVersion);
    return latestVersion;
  } catch (error) {
    console.error('Error fetching ' + package_name + ' version:', error);
    return '';
  }
}

interface PypiStats {
  last_day: number;
  last_month: number;
  last_week: number;
}

interface PypiStatsApiResponse {
  data: PypiStats;
  package: string;
  type: string;
}

export async function fetchPyPIDownloadStats(package_name: string): Promise<PypiStatsApiResponse> {
  try {
    const pypistats_url =
      'https://api.allorigins.win/raw?url=' + 'https://pypistats.org/api/packages/' + package_name + '/recent';
    const response = await fetch(pypistats_url, { mode: 'no-cors' });
    const data = await response.json();
    return data;
    // return {
    //     data: {
    //       last_day: NaN,
    //       last_month: NaN,
    //       last_week: NaN
    //     },
    //     package: package_name,
    //     type: "recent_downloads"
    //   };
  } catch (error) {
    console.error('Error fetching ' + package_name + ' download stats:', error);
    return {
      data: {
        last_day: NaN,
        last_month: NaN,
        last_week: NaN,
      },
      package: package_name,
      type: 'recent_downloads',
    };
  }
}

interface GitHubStats {
  n_stars: number;
  n_forks: number;
  n_watchers: number;
}

export async function fetchGitHubStats(github_org: string, github_repo: string): Promise<GitHubStats> {
  const github_api_url = `https://api.github.com/repos/${github_org}/${github_repo}`;
  const github_api = await fetch(github_api_url);
  const github_data = await github_api.json();

  return {
    n_stars: github_data.stargazers_count,
    n_forks: github_data.forks_count,
    n_watchers: github_data.subscribers_count,
  };
  // return {
  //     n_stars: NaN,
  //     n_forks: NaN,
  //     n_watchers: NaN
  // }
}

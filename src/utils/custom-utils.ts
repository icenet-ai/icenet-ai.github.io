
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
        return "";
    }
  }
  
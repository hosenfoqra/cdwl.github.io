https://stackoverflow.com/questions/54566245/composer-cant-find-mongodb-extension-required-mongodb-extension

Check PHP Version: First, determine your PHP version by running the following command in your Command Prompt or Terminal:

php -v
Take note of the PHP version, as you'll need this information in the next steps.

Identify Architecture and Thread Safety: Next, check if the Thread Safety (TS) is enabled or disabled. Run the following command:

php -i | findstr "Thread Safety"
If "Thread Safety" is enabled, you have a thread-safe (TS) version.

Download the Correct DLL File: Now, visit the project's » Github releases page (https://github.com/mongodb/mongo-php-driver/releases) and look for the appropriate archive that matches your PHP version, architecture, and thread safety.

For example, if you have PHP 8.2, x64 architecture, and TS enabled, the correct file would be named something like php_mongodb-1.x.8.2-ts-x64.zip. Make sure to choose the exact combination that matches your PHP environment.

Copy DLL to PHP Extension Directory: After downloading extract and copy the DLL file to your PHP extension directory. By default, the extension directory is named "ext" and is located within your PHP installation folder (e.g., C:\php\ext on Windows).

Update php.ini: Open your PHP configuration file (php.ini) and add the following line at the end:

extension=php_mongodb

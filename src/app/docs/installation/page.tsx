import DocLayout from "../../../components/docs/DocLayout";

export default function InstallationPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Installing Git</h1>

        <h2>Windows Installation</h2>
        <ol>
          <li>
            Visit the official Git website at{" "}
            <a
              href="https://git-scm.com/download/win"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://git-scm.com/download/win
            </a>
          </li>
          <li>Download the latest version for your system (32 or 64 bit)</li>
          <li>
            Run the installer and follow these recommended settings:
            <ul>
              <li>
                Select components: Keep defaults, ensure &quot;Git Bash&quot; is
                selected
              </li>
              <li>Choosing default editor: Select your preferred editor</li>
              <li>
                Adjusting PATH: Select &quot;Git from the command line and also
                from 3rd-party software&quot;
              </li>
              <li>HTTPS transport backend: Keep OpenSSL library</li>
              <li>
                Line ending conversions: &quot;Checkout Windows-style, commit
                Unix-style line endings&quot;
              </li>
            </ul>
          </li>
        </ol>

        <h2>macOS Installation</h2>
        <h3>Using Homebrew (Recommended)</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>brew install git</code>
        </div>

        <h3>Using the Installer</h3>
        <ol>
          <li>
            Visit{" "}
            <a
              href="https://git-scm.com/download/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://git-scm.com/download/mac
            </a>
          </li>
          <li>Download and run the latest installer</li>
        </ol>

        <h2>Linux Installation</h2>
        <h3>Debian/Ubuntu</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>sudo apt-get update</code>
          <br />
          <code>sudo apt-get install git</code>
        </div>

        <h3>Fedora</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>sudo dnf install git</code>
        </div>

        <h2>Verifying Installation</h2>
        <p>After installation, verify Git is properly installed by running:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git --version</code>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Note:</strong> After installing Git, you should configure
            your username and email:
          </p>
          <div className="bg-gray-100 p-4 rounded-md my-4">
            <code>git config --global user.name &quot;Your Name&quot;</code>
            <br />
            <code>
              git config --global user.email &quot;your.email@example.com&quot;
            </code>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}

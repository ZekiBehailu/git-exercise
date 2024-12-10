import DocLayout from "../../../components/docs/DocLayout";

export default function GitClonePage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Clone</h1>

        <p className="lead">
          The <code>git clone</code> command creates a copy of a remote
          repository on your local machine. It copies the entire project history
          and all branches.
        </p>

        <h2>Basic Usage</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git clone &lt;repository-url&gt;</code>
        </div>

        <h2>Common Options</h2>
        <ul>
          <li>
            <code>--branch &lt;branch-name&gt;</code> or{" "}
            <code>-b &lt;branch-name&gt;</code>: Clone a specific branch
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>
                git clone -b develop https://github.com/username/repo.git
              </code>
            </div>
          </li>
          <li>
            <code>--depth &lt;depth&gt;</code>: Create a shallow clone with
            limited history
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>
                git clone --depth 1 https://github.com/username/repo.git
              </code>
            </div>
          </li>
          <li>
            <code>--recursive</code>: Clone submodules as well
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>
                git clone --recursive https://github.com/username/repo.git
              </code>
            </div>
          </li>
        </ul>

        <h2>Examples</h2>
        <h3>1. Cloning from HTTPS URL</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git clone https://github.com/username/repository.git</code>
        </div>

        <h3>2. Cloning from SSH URL</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git clone git@github.com:username/repository.git</code>
        </div>

        <h3>3. Cloning to a Specific Directory</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git clone https://github.com/username/repository.git my-project
          </code>
        </div>

        <h2>What Happens During Clone?</h2>
        <p>When you run git clone, Git:</p>
        <ol>
          <li>Creates a new directory with the repository name</li>
          <li>Initializes a .git directory inside it</li>
          <li>Downloads all repository data</li>
          <li>Checks out the default branch (usually main or master)</li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> When cloning over HTTPS, you might need to
            provide your GitHub credentials. Consider setting up SSH keys for
            easier authentication.
          </p>
        </div>

        <h2>Common Issues</h2>
        <h3>Permission Denied</h3>
        <p>If you see a &quot;Permission denied&quot; error, check:</p>
        <ul>
          <li>Your authentication credentials</li>
          <li>Repository access permissions</li>
          <li>SSH key configuration (for SSH URLs)</li>
        </ul>

        <h3>Slow Clone Speed</h3>
        <p>For large repositories, you can:</p>
        <ul>
          <li>
            Use shallow cloning with <code>--depth</code>
          </li>
          <li>
            Clone only a specific branch with <code>--single-branch</code>
          </li>
          <li>Use a faster network connection</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Always verify the repository URL
            before cloning and ensure you have the necessary permissions to
            access the repository.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

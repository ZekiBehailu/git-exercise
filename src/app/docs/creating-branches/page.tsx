import DocLayout from "../../../components/docs/DocLayout";

export default function CreatingBranchesPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Creating Branches in Git</h1>

        <p className="lead">
          Branches allow you to develop features, fix bugs, and experiment with
          new ideas in isolation from your main codebase.
        </p>

        <h2>Basic Branch Creation</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git branch &lt;branch-name&gt;</code>
        </div>

        <h2>Create and Switch in One Command</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b &lt;branch-name&gt;</code>
        </div>
        <p>
          Or using the newer <code>switch</code> command:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git switch -c &lt;branch-name&gt;</code>
        </div>

        <h2>Common Branch Creation Patterns</h2>
        <h3>1. Feature Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b feature/user-authentication</code>
        </div>

        <h3>2. Bugfix Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b fix/login-error</code>
        </div>

        <h3>3. Release Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b release/v1.0.0</code>
        </div>

        <h2>Branch Management Commands</h2>
        <ul>
          <li>
            List all branches:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git branch</code>
            </div>
          </li>
          <li>
            List remote branches:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git branch -r</code>
            </div>
          </li>
          <li>
            List all branches (local and remote):
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git branch -a</code>
            </div>
          </li>
          <li>
            Delete a branch:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git branch -d &lt;branch-name&gt;</code>
            </div>
          </li>
        </ul>

        <h2>Branch Naming Conventions</h2>
        <ul>
          <li>
            <code>feature/*</code> - For new features
          </li>
          <li>
            <code>fix/*</code> or <code>bugfix/*</code> - For bug fixes
          </li>
          <li>
            <code>release/*</code> - For release branches
          </li>
          <li>
            <code>hotfix/*</code> - For urgent fixes to production
          </li>
          <li>
            <code>docs/*</code> - For documentation changes
          </li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Use descriptive branch names that clearly
            indicate the purpose of the branch. Include ticket numbers if
            applicable (e.g., <code>feature/ABC-123-user-auth</code>).
          </p>
        </div>

        <h2>Creating Branches from Specific Points</h2>

        <h3>From a Specific Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b &lt;branch-name&gt; &lt;commit-hash&gt;</code>
        </div>

        <h3>From a Tag</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b &lt;branch-name&gt; &lt;tag-name&gt;</code>
        </div>

        <h3>From Another Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git checkout -b &lt;new-branch&gt; &lt;existing-branch&gt;
          </code>
        </div>

        <h2>Best Practices</h2>
        <ul>
          <li>Always create branches from an up-to-date main branch</li>
          <li>Use clear, descriptive branch names</li>
          <li>Delete branches after they&apos;re merged</li>
          <li>Keep branches focused on a single feature or fix</li>
          <li>Regularly sync your branch with the main branch</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Before creating a new branch, always
            ensure you&apos;re on an up-to-date main branch:
          </p>
          <div className="bg-gray-100 p-4 rounded-md my-4">
            <code>git checkout main</code>
            <br />
            <code>git pull origin main</code>
            <br />
            <code>git checkout -b feature/new-feature</code>
          </div>
        </div>

        <h2>Troubleshooting</h2>

        <h3>Branch Already Exists</h3>
        <p>If you get &quot;branch already exists&quot; error, either:</p>
        <ul>
          <li>Choose a different branch name</li>
          <li>Delete the existing branch if it&apos;s no longer needed</li>
          <li>Switch to the existing branch instead of creating a new one</li>
        </ul>

        <h3>Cannot Create Branch</h3>
        <p>Common reasons for branch creation failures:</p>
        <ul>
          <li>Uncommitted changes in your working directory</li>
          <li>Invalid branch name (contains invalid characters)</li>
          <li>Insufficient permissions (in case of remote branches)</li>
        </ul>
      </div>
    </DocLayout>
  );
}

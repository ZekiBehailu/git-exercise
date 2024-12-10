import DocLayout from "../../../components/docs/DocLayout";

export default function SwitchingBranchesPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Switching Branches in Git</h1>

        <p className="lead">
          Switching branches allows you to move between different lines of
          development in your repository. Git provides multiple commands for
          this purpose.
        </p>

        <h2>Basic Branch Switching</h2>
        <h3>Using checkout (traditional method)</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout &lt;branch-name&gt;</code>
        </div>

        <h3>Using switch (modern method)</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git switch &lt;branch-name&gt;</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> The <code>switch</code> command was
            introduced in Git 2.23 as a more user-friendly alternative to{" "}
            <code>checkout</code> for branch operations.
          </p>
        </div>

        <h2>Common Switching Scenarios</h2>

        <h3>1. Switch to the Previous Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -</code>
          <br />
          <code>git switch -</code>
        </div>

        <h3>2. Switch and Create a New Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -b &lt;new-branch&gt;</code>
          <br />
          <code>git switch -c &lt;new-branch&gt;</code>
        </div>

        <h3>3. Switch to a Remote Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout --track origin/&lt;branch-name&gt;</code>
          <br />
          <code>git switch --track origin/&lt;branch-name&gt;</code>
        </div>

        <h2>Handling Uncommitted Changes</h2>

        <h3>1. Stash Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git stash save &quot;Work in progress&quot;</code>
          <br />
          <code>git switch &lt;branch-name&gt;</code>
          <br />
          <code>git stash pop # when you want to restore the changes</code>
        </div>

        <h3>2. Take Changes to New Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git switch -c &lt;new-branch&gt;</code>
        </div>

        <h2>Common Issues and Solutions</h2>

        <h3>Uncommitted Changes Blocking Switch</h3>
        <p>When you have local changes that conflict with the target branch:</p>
        <ol>
          <li>
            Commit the changes:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add .</code>
              <br />
              <code>
                git commit -m &quot;Save changes before switching&quot;
              </code>
            </div>
          </li>
          <li>
            Stash the changes:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git stash</code>
            </div>
          </li>
          <li>
            Discard the changes (use with caution):
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git reset --hard</code>
            </div>
          </li>
        </ol>

        <h3>Branch Not Found</h3>
        <p>If the branch isn&apos;t found, verify:</p>
        <ul>
          <li>
            The branch name is correct (<code>git branch</code> to list local
            branches)
          </li>
          <li>
            The branch exists remotely (<code>git branch -r</code>)
          </li>
          <li>
            You&apos;ve fetched the latest changes (<code>git fetch</code>)
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>Always commit or stash changes before switching branches</li>
            <li>Pull the latest changes after switching to a branch</li>
            <li>Use descriptive branch names to avoid confusion</li>
            <li>Regularly clean up old branches that are no longer needed</li>
          </ul>
        </div>

        <h2>Advanced Switching Techniques</h2>

        <h3>Switch to a Specific Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout &lt;commit-hash&gt;</code>
        </div>
        <p>
          This puts you in a &quot;detached HEAD&quot; state. Create a new
          branch if you need to make changes.
        </p>

        <h3>Switch to a Tagged Version</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout &lt;tag-name&gt;</code>
        </div>

        <h3>Force Switch (Discard Changes)</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout -f &lt;branch-name&gt;</code>
        </div>
        <p className="text-red-600">
          Warning: This will discard all local changes!
        </p>
      </div>
    </DocLayout>
  );
}

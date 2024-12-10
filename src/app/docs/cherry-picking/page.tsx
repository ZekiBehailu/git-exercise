import DocLayout from "../../../components/docs/DocLayout";

export default function CherryPickingPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Cherry Pick</h1>

        <p className="lead">
          Cherry picking in Git allows you to apply specific commits from one
          branch to another. It&apos;s useful when you want to selectively apply
          changes without merging entire branches.
        </p>

        <h2>Basic Cherry Pick Command</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick &lt;commit-hash&gt;</code>
        </div>

        <h2>Common Use Cases</h2>
        <ul>
          <li>Applying a bugfix to multiple branches</li>
          <li>Moving commits that were made on the wrong branch</li>
          <li>Backporting features to maintenance branches</li>
          <li>Applying specific changes without full branch merges</li>
        </ul>

        <h2>Cherry Pick Operations</h2>

        <h3>1. Pick a Single Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick abc123</code>
        </div>

        <h3>2. Pick Multiple Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick abc123 def456 ghi789</code>
        </div>

        <h3>3. Pick a Range of Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick abc123^..def456</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> The <code>^</code> symbol includes the first
            commit in the range. Without it, the first commit would be excluded.
          </p>
        </div>

        <h2>Cherry Pick Options</h2>
        <ul>
          <li>
            <code>-n</code> or <code>--no-commit</code>: Apply changes without
            committing
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick -n abc123</code>
            </div>
          </li>
          <li>
            <code>-x</code>: Add source commit reference to message
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick -x abc123</code>
            </div>
          </li>
          <li>
            <code>--edit</code>: Edit commit message before committing
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick --edit abc123</code>
            </div>
          </li>
        </ul>

        <h2>Step-by-Step Example</h2>
        <ol>
          <li>
            Find the commit hash you want to cherry-pick:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git log --oneline</code>
            </div>
          </li>
          <li>
            Switch to the target branch:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git checkout target-branch</code>
            </div>
          </li>
          <li>
            Cherry-pick the commit:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick abc123</code>
            </div>
          </li>
        </ol>

        <h2>Handling Cherry Pick Conflicts</h2>
        <ol>
          <li>When conflicts occur, resolve them in the affected files</li>
          <li>
            Stage the resolved files:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add &lt;resolved-files&gt;</code>
            </div>
          </li>
          <li>
            Continue the cherry-pick:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick --continue</code>
            </div>
          </li>
          <li>
            Or abort the operation:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git cherry-pick --abort</code>
            </div>
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>
              Use meaningful commit messages that explain why the change is
              being cherry-picked
            </li>
            <li>
              Cherry-pick commits in a logical order to minimize conflicts
            </li>
            <li>
              Document cherry-picked commits in your team&apos;s tracking system
            </li>
            <li>
              Test changes after cherry-picking to ensure they work in the new
              context
            </li>
          </ul>
        </div>

        <h2>Advanced Techniques</h2>

        <h3>Cherry-Pick Without Committing</h3>
        <p>To review changes before committing:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick -n abc123</code>
          <br />
          <code>git diff --staged</code>
          <br />
          <code>git commit -m &quot;Apply feature X from branch Y&quot;</code>
        </div>

        <h3>Cherry-Pick with Custom Author</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick -x --signoff abc123</code>
        </div>

        <h2>Common Issues</h2>

        <h3>1. Merge Commits</h3>
        <p>Cherry-picking merge commits requires specifying a parent:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick -m 1 &lt;merge-commit-hash&gt;</code>
        </div>

        <h3>2. Dependent Commits</h3>
        <p>When commits depend on each other, cherry-pick them in order:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick abc123^..def456</code>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
          <p className="text-red-700">
            <strong>Warning:</strong> Cherry-picking can duplicate commits and
            make history harder to follow. Consider whether merging or rebasing
            might be more appropriate for your use case.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

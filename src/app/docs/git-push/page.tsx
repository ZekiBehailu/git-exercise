import DocLayout from "../../../components/docs/DocLayout";

export default function GitPushPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Push</h1>

        <p className="lead">
          The <code>git push</code> command uploads your local repository
          content to a remote repository. It transfers commits from your local
          repository to the remote.
        </p>

        <h2>Basic Usage</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push &lt;remote&gt; &lt;branch&gt;</code>
        </div>

        <h2>Common Commands</h2>
        <ul>
          <li>
            Push to default remote (origin):
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git push origin main</code>
            </div>
          </li>
          <li>
            Push and set upstream:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git push -u origin feature-branch</code>
            </div>
          </li>
          <li>
            Push all branches:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git push --all origin</code>
            </div>
          </li>
          <li>
            Push tags:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git push origin --tags</code>
            </div>
          </li>
        </ul>

        <h2>Common Options</h2>
        <ul>
          <li>
            <code>-u</code> or <code>--set-upstream</code>: Set upstream for git
            pull/status
          </li>
          <li>
            <code>-f</code> or <code>--force</code>: Force push (use with
            caution)
          </li>
          <li>
            <code>--tags</code>: Push all tags
          </li>
          <li>
            <code>--delete</code>: Delete a remote branch
          </li>
        </ul>

        <h2>Examples with Explanations</h2>

        <h3>1. First Push to a New Repository</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push -u origin main</code>
        </div>
        <p>
          This pushes your local main branch to the remote named origin and sets
          up tracking, allowing you to use <code>git pull</code> without
          arguments in the future.
        </p>

        <h3>2. Pushing a Feature Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push origin feature/new-feature</code>
        </div>
        <p>
          This pushes your feature branch to the remote repository, making it
          available for code review or collaboration.
        </p>

        <h3>3. Deleting a Remote Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push origin --delete feature/old-feature</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Warning:</strong> Be extremely careful with{" "}
            <code>git push --force</code>. It can overwrite remote changes and
            cause problems for other team members.
          </p>
        </div>

        <h2>Common Issues and Solutions</h2>

        <h3>Push Rejected</h3>
        <p>If your push is rejected, it usually means:</p>
        <ol>
          <li>
            Remote has changes you don&apos;t have locally
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git pull origin main</code>
              <br />
              <code>git push origin main</code>
            </div>
          </li>
          <li>Branch protection rules are preventing the push</li>
          <li>You don&apos;t have write permissions</li>
        </ol>

        <h3>Force Push</h3>
        <p>When you need to overwrite remote history (use with caution):</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push --force-with-lease origin main</code>
        </div>
        <p>
          <code>--force-with-lease</code> is safer than <code>--force</code> as
          it prevents overwriting others&apos; changes.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>Always pull before pushing to avoid conflicts</li>
            <li>
              Use <code>--force-with-lease</code> instead of{" "}
              <code>--force</code>
            </li>
            <li>Push to feature branches instead of main/master directly</li>
            <li>Verify the remote and branch names before pushing</li>
          </ul>
        </div>

        <h2>Advanced Usage</h2>
        <h3>Pushing to Multiple Remotes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git remote add upstream https://github.com/original/repo.git
          </code>
          <br />
          <code>git push upstream main</code>
        </div>

        <h3>Pushing Specific Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push origin commit-hash:branch-name</code>
        </div>
      </div>
    </DocLayout>
  );
}

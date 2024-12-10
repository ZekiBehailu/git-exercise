import DocLayout from "../../../components/docs/DocLayout";

export default function RebasingPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Rebase</h1>

        <p className="lead">
          Rebasing is an alternative to merging that rewrites commit history by
          moving the entire feature branch to begin on the tip of the main
          branch, creating a linear history.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Warning:</strong> Never rebase commits that have been pushed
            to public repositories unless you&apos;re absolutely sure no one
            else is working with them.
          </p>
        </div>

        <h2>Basic Rebase Command</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase &lt;base-branch&gt;</code>
        </div>

        <h2>Common Rebase Operations</h2>

        <h3>1. Basic Rebase</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout feature-branch</code>
          <br />
          <code>git rebase main</code>
        </div>

        <h3>2. Interactive Rebase</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase -i HEAD~3</code> {/* Rebase last 3 commits */}
        </div>

        <h3>3. Abort Rebase</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase --abort</code>
        </div>

        <h2>When to Use Rebase</h2>
        <h3>Good Use Cases</h3>
        <ul>
          <li>Cleaning up local commits before pushing</li>
          <li>Keeping feature branches up-to-date with main</li>
          <li>Creating a linear project history</li>
          <li>Integrating upstream changes into your feature branch</li>
        </ul>

        <h3>When to Avoid</h3>
        <ul>
          <li>Public branches that others are working on</li>
          <li>When commit history needs to be preserved exactly</li>
          <li>When you&apos;re not confident resolving complex conflicts</li>
        </ul>

        <h2>Rebase vs. Merge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-gray-50 p-4 rounded">
            <h4>Rebase</h4>
            <ul>
              <li>Creates linear history</li>
              <li>Cleaner project history</li>
              <li>Rewrites commit history</li>
              <li>Better for feature branches</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h4>Merge</h4>
            <ul>
              <li>Preserves complete history</li>
              <li>Shows when parallel development occurred</li>
              <li>Maintains original commit history</li>
              <li>Better for public branches</li>
            </ul>
          </div>
        </div>

        <h2>Step-by-Step Rebase Process</h2>
        <ol>
          <li>
            Update your main branch:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git checkout main</code>
              <br />
              <code>git pull origin main</code>
            </div>
          </li>
          <li>
            Switch to your feature branch:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git checkout feature-branch</code>
            </div>
          </li>
          <li>
            Start the rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase main</code>
            </div>
          </li>
          <li>Resolve any conflicts that arise</li>
          <li>
            Force push if the branch was previously pushed:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git push --force-with-lease origin feature-branch</code>
            </div>
          </li>
        </ol>

        <h2>Handling Rebase Conflicts</h2>
        <ol>
          <li>Resolve conflicts in each file</li>
          <li>
            Stage resolved files:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add &lt;resolved-file&gt;</code>
            </div>
          </li>
          <li>
            Continue rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase --continue</code>
            </div>
          </li>
          <li>
            Or abort if needed:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase --abort</code>
            </div>
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>Always create a backup branch before rebasing</li>
            <li>
              Use <code>--force-with-lease</code> instead of{" "}
              <code>--force</code> when pushing
            </li>
            <li>Communicate with your team when rebasing shared branches</li>
            <li>Keep rebases small and focused</li>
          </ul>
        </div>

        <h2>Advanced Rebase Techniques</h2>

        <h3>Rebase onto a Specific Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git rebase --onto &lt;new-base&gt; &lt;old-base&gt; &lt;branch&gt;
          </code>
        </div>

        <h3>Automatically Stash and Pop Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase --autostash main</code>
        </div>

        <h3>Preserve Merge Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase --rebase-merges main</code>
        </div>
      </div>
    </DocLayout>
  );
}

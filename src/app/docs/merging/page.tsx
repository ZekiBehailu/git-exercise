import DocLayout from "../../../components/docs/DocLayout";

export default function MergingPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Merging in Git</h1>

        <p className="lead">
          Merging combines changes from different branches into a single branch.
          It&apos;s how you integrate work from different features or fixes into
          your main codebase.
        </p>

        <h2>Basic Merge Command</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge &lt;branch-name&gt;</code>
        </div>

        <h2>Types of Merges</h2>

        <h3>1. Fast-forward Merge</h3>
        <p>
          When there are no new changes in the base branch since the feature
          branch was created:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge feature-branch</code>
        </div>

        <h3>2. Three-way Merge</h3>
        <p>
          When both branches have new commits, Git creates a new merge commit:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git merge feature-branch -m &quot;Merge feature branch&quot;
          </code>
        </div>

        <h3>3. Squash Merge</h3>
        <p>Combines all changes into a single commit:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge --squash feature-branch</code>
          <br />
          <code>git commit -m &quot;Implement feature X&quot;</code>
        </div>

        <h2>Common Merge Scenarios</h2>

        <h3>Merging a Feature Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout main</code>
          <br />
          <code>git pull origin main</code>
          <br />
          <code>git merge feature/new-feature</code>
        </div>

        <h3>Merging with a Custom Message</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git merge feature-branch -m &quot;Merge feature: Add user
            authentication&quot;
          </code>
        </div>

        <h3>Abort a Merge</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge --abort</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Always ensure your working directory is clean
            before merging. Use <code>git status</code> to check.
          </p>
        </div>

        <h2>Merge Strategies</h2>
        <ul>
          <li>
            <strong>recursive (default)</strong>: Used for three-way merges
          </li>
          <li>
            <strong>resolve</strong>: Used for two-way merges
          </li>
          <li>
            <strong>octopus</strong>: Used for merging multiple branches
          </li>
          <li>
            <strong>ours</strong>: Automatically resolves conflicts by keeping
            base branch changes
          </li>
          <li>
            <strong>theirs</strong>: Automatically resolves conflicts by keeping
            merged branch changes
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            Always update your branch with the latest changes from main before
            merging
          </li>
          <li>Test your changes after merging</li>
          <li>Use meaningful commit messages for merge commits</li>
          <li>Delete feature branches after successful merges</li>
          <li>Review changes before merging</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Before merging, ensure your feature
            branch is up to date:
          </p>
          <div className="bg-gray-100 p-4 rounded-md my-4">
            <code>git checkout feature-branch</code>
            <br />
            <code>git pull origin main</code>
            <br />
            <code>git checkout main</code>
            <br />
            <code>git merge feature-branch</code>
          </div>
        </div>

        <h2>Common Issues and Solutions</h2>

        <h3>Merge Conflicts</h3>
        <p>When Git can&apos;t automatically merge changes:</p>
        <ol>
          <li>Resolve conflicts in conflicting files</li>
          <li>
            Stage resolved files with <code>git add</code>
          </li>
          <li>
            Complete the merge with <code>git commit</code>
          </li>
        </ol>

        <h3>Accidentally Started Merge</h3>
        <p>To cancel an in-progress merge:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge --abort</code>
        </div>

        <h3>Wrong Branch Merged</h3>
        <p>To undo a merge that was just made:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git reset --hard HEAD~1</code>
        </div>
        <p className="text-red-600">
          Warning: This will remove the merge commit and any changes it
          introduced!
        </p>

        <h2>Advanced Merge Techniques</h2>

        <h3>Cherry-Pick Instead of Merge</h3>
        <p>To merge specific commits instead of entire branches:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git cherry-pick &lt;commit-hash&gt;</code>
        </div>

        <h3>Rebase Instead of Merge</h3>
        <p>For a cleaner history, you might want to rebase instead:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase main</code>
        </div>
      </div>
    </DocLayout>
  );
}

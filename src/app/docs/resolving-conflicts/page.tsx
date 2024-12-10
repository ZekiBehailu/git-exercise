import DocLayout from "../../../components/docs/DocLayout";

export default function ResolvingConflictsPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Resolving Git Conflicts</h1>

        <p className="lead">
          Merge conflicts occur when Git can&apos;t automatically reconcile
          differences between two branches. This typically happens when the same
          lines of code have been modified in different ways.
        </p>

        <h2>Understanding Conflict Markers</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature-branch`}</code>
          </pre>
        </div>
        <ul>
          <li>
            <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>: Start of your
            changes
          </li>
          <li>
            <code>=======</code>: Separator between changes
          </li>
          <li>
            <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch</code>: End of
            their changes
          </li>
        </ul>

        <h2>Steps to Resolve Conflicts</h2>
        <ol>
          <li>
            Identify conflicting files:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git status</code>
            </div>
          </li>
          <li>Open each conflicting file and locate conflict markers</li>
          <li>Choose which changes to keep or combine them</li>
          <li>Remove conflict markers</li>
          <li>
            Stage resolved files:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add &lt;resolved-file&gt;</code>
            </div>
          </li>
          <li>
            Complete the merge:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git commit -m &quot;Resolve merge conflicts&quot;</code>
            </div>
          </li>
        </ol>

        <h2>Common Conflict Scenarios</h2>

        <h3>1. Same Line Modified</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`<<<<<<< HEAD
console.log("Hello World");
=======
console.log("Hi World");
>>>>>>> feature-branch`}</code>
          </pre>
        </div>

        <h3>2. File Deleted in One Branch</h3>
        <p>Choose whether to:</p>
        <ul>
          <li>
            Keep the file: <code>git add &lt;file&gt;</code>
          </li>
          <li>
            Remove the file: <code>git rm &lt;file&gt;</code>
          </li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Use <code>git diff</code> to see detailed
            changes between branches before resolving conflicts.
          </p>
        </div>

        <h2>Tools for Resolving Conflicts</h2>

        <h3>1. Using Git Mergetool</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git mergetool</code>
        </div>
        <p>Configure your preferred merge tool:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git config --global merge.tool &lt;toolname&gt;</code>
        </div>

        <h3>2. Visual Studio Code</h3>
        <p>
          VS Code provides a built-in merge conflict resolver with options to:
        </p>
        <ul>
          <li>Accept Current Change</li>
          <li>Accept Incoming Change</li>
          <li>Accept Both Changes</li>
          <li>Compare Changes</li>
        </ul>

        <h2>Prevention Strategies</h2>
        <ul>
          <li>Regularly pull changes from the main branch</li>
          <li>Keep feature branches short-lived</li>
          <li>Communicate with team members about file changes</li>
          <li>Use meaningful commit messages</li>
          <li>Break down large features into smaller, manageable pieces</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Before starting conflict resolution:
          </p>
          <ol className="mt-2">
            <li>Make a backup of your current state</li>
            <li>Understand both sets of changes</li>
            <li>Consult with team members if necessary</li>
            <li>Test thoroughly after resolving conflicts</li>
          </ol>
        </div>

        <h2>Advanced Conflict Resolution</h2>

        <h3>Using git checkout</h3>
        <p>To choose one version entirely:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git checkout --ours &lt;file&gt;</code>
          <br />
          <code>git checkout --theirs &lt;file&gt;</code>
        </div>

        <h3>Aborting a Conflicted Merge</h3>
        <p>If you need to start over:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git merge --abort</code>
        </div>

        <h2>After Resolving Conflicts</h2>
        <ol>
          <li>Review the changes carefully</li>
          <li>Run tests to ensure functionality</li>
          <li>Push the resolved changes</li>
          <li>Document any important decisions made during resolution</li>
        </ol>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
          <p className="text-red-700">
            <strong>Warning:</strong> Never blindly accept changes without
            understanding their impact. Always test your application after
            resolving conflicts.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

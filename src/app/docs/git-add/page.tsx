import DocLayout from "../../../components/docs/DocLayout";

export default function GitAddPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Add</h1>

        <p className="lead">
          The <code>git add</code> command adds changes in your working
          directory to the staging area. It tells Git that you want to include
          updates to a particular file in the next commit.
        </p>

        <h2>Basic Usage</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add &lt;filename&gt;</code>
        </div>

        <h2>Common Commands</h2>
        <ul>
          <li>
            Add all changes:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add .</code>
            </div>
          </li>
          <li>
            Add specific file:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add path/to/file.txt</code>
            </div>
          </li>
          <li>
            Add multiple files:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add file1.js file2.js file3.js</code>
            </div>
          </li>
          <li>
            Add files by pattern:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add *.js</code>
            </div>
          </li>
        </ul>

        <h2>Interactive Mode</h2>
        <p>
          Interactive mode allows you to review and select changes to stage:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add -i</code>
        </div>
        <p>Or stage changes in hunks:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add -p</code>
        </div>

        <h2>Common Options</h2>
        <ul>
          <li>
            <code>-A</code> or <code>--all</code>: Add all changes (including
            deletions)
          </li>
          <li>
            <code>-u</code>: Add modified and deleted files, but not new ones
          </li>
          <li>
            <code>-p</code> or <code>--patch</code>: Interactively choose hunks
            to stage
          </li>
          <li>
            <code>-n</code> or <code>--dry-run</code>: Show what would be added
            without actually adding
          </li>
        </ul>

        <h2>Examples with Explanations</h2>

        <h3>1. Adding All Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add .</code>
        </div>
        <p>
          This stages all changes in the current directory and its
          subdirectories.
        </p>

        <h3>2. Adding Modified Files Only</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add -u</code>
        </div>
        <p>This stages modifications and deletions, but not untracked files.</p>

        <h3>3. Interactive Staging</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add -p file.txt</code>
        </div>
        <p>This allows you to stage specific parts of changes within a file.</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Use <code>git status</code> before and after{" "}
            <code>git add</code> to verify what changes are being staged.
          </p>
        </div>

        <h2>Common Mistakes and Solutions</h2>

        <h3>Adding Unwanted Files</h3>
        <p>If you accidentally stage a file:</p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git reset &lt;filename&gt;</code>
        </div>

        <h3>Adding Large Binary Files</h3>
        <p>
          Be cautious when using <code>git add .</code> as it might include
          large files or binaries. Consider using <code>.gitignore</code> to
          exclude such files.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Review your changes with{" "}
            <code>git status</code> and <code>git diff</code>
            before staging them. Use <code>git add -p</code> for more precise
            control over what you&apos;re staging.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

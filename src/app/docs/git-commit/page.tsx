import DocLayout from "../../../components/docs/DocLayout";

export default function GitCommitPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Commit</h1>

        <p className="lead">
          The <code>git commit</code> command captures a snapshot of your staged
          changes, creating a new commit in your repository&apos;s history.
        </p>

        <h2>Basic Usage</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit -m &quot;Your commit message&quot;</code>
        </div>

        <h2>Common Options</h2>
        <ul>
          <li>
            <code>-m &quot;message&quot;</code>: Add a commit message
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git commit -m &quot;Fix navigation bug&quot;</code>
            </div>
          </li>
          <li>
            <code>-a</code> or <code>--all</code>: Automatically stage modified
            and deleted files
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git commit -am &quot;Update all modified files&quot;</code>
            </div>
          </li>
          <li>
            <code>--amend</code>: Modify the last commit
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>
                git commit --amend -m &quot;Updated commit message&quot;
              </code>
            </div>
          </li>
        </ul>

        <h2>Writing Good Commit Messages</h2>
        <h3>Structure</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>
              {`Short summary (50 chars or less)

Detailed explanation of what changed and why.
- List major changes
- Explain the reasoning
- Reference related issues

Fixes #123`}
            </code>
          </pre>
        </div>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep the subject line short (50 characters or less)</li>
          <li>
            Use the imperative mood (&quot;Add feature&quot; not &quot;Added
            feature&quot;)
          </li>
          <li>Capitalize the subject line</li>
          <li>Don&apos;t end the subject line with a period</li>
          <li>Separate subject from body with a blank line</li>
          <li>Use the body to explain what and why vs. how</li>
        </ul>

        <h2>Examples</h2>

        <h3>1. Simple Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit -m &quot;Add user authentication feature&quot;</code>
        </div>

        <h3>2. Commit with Description</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git commit -m &quot;Add user authentication feature&quot; -m &quot;-
            Implement JWT tokens\n- Add login/logout endpoints\n- Set up
            password hashing&quot;
          </code>
        </div>

        <h3>3. Amending a Commit</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit --amend --no-edit</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Use <code>git status</code> before committing
            to verify what changes will be included in your commit.
          </p>
        </div>

        <h2>Common Scenarios</h2>

        <h3>Forgot to Add a File</h3>
        <ol>
          <li>
            Stage the forgotten file: <code>git add forgotten-file.txt</code>
          </li>
          <li>
            Amend the commit: <code>git commit --amend --no-edit</code>
          </li>
        </ol>

        <h3>Wrong Commit Message</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit --amend -m &quot;New commit message&quot;</code>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Make atomic commits that contain
            related changes. This makes it easier to understand, review, and
            revert changes if needed.
          </p>
        </div>

        <h2>Troubleshooting</h2>
        <h3>Nothing to Commit</h3>
        <p>If you see &quot;nothing to commit, working tree clean&quot;:</p>
        <ul>
          <li>
            Check if you staged your changes with <code>git add</code>
          </li>
          <li>
            Verify you have actually made changes with <code>git status</code>
          </li>
        </ul>

        <h3>Commit Failed</h3>
        <p>Common reasons for commit failures:</p>
        <ul>
          <li>No changes staged for commit</li>
          <li>Merge conflicts not resolved</li>
          <li>Pre-commit hooks failing</li>
        </ul>
      </div>
    </DocLayout>
  );
}

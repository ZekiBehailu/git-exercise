import DocLayout from "../../../components/docs/DocLayout";

export default function InteractiveRebasePage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Interactive Rebase in Git</h1>

        <p className="lead">
          Interactive rebase is a powerful tool that allows you to modify
          commits in various ways: reorder, edit, squash, split, or delete them.
          It&apos;s perfect for cleaning up your commit history before sharing
          your code.
        </p>

        <h2>Basic Command</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase -i &lt;commit&gt;</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Warning:</strong> Only use interactive rebase on commits
            that haven&apos;t been pushed to a shared repository, as it rewrites
            commit history.
          </p>
        </div>

        <h2>Common Operations</h2>
        <ul>
          <li>
            <code>pick</code>: Use the commit as is
          </li>
          <li>
            <code>reword</code>: Change the commit message
          </li>
          <li>
            <code>edit</code>: Stop for amending
          </li>
          <li>
            <code>squash</code>: Meld into previous commit
          </li>
          <li>
            <code>fixup</code>: Like squash, but discard commit message
          </li>
          <li>
            <code>drop</code>: Remove the commit
          </li>
        </ul>

        <h2>Common Use Cases</h2>

        <h3>1. Editing Recent Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git rebase -i HEAD~3</code> {/* Last 3 commits */}
        </div>

        <h3>2. Squashing Multiple Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`pick abc123 First commit
squash def456 Second commit
squash ghi789 Third commit`}</code>
          </pre>
        </div>

        <h3>3. Reordering Commits</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`pick abc123 First commit
pick ghi789 Third commit
pick def456 Second commit`}</code>
          </pre>
        </div>

        <h2>Step-by-Step Examples</h2>

        <h3>Squashing Multiple Commits</h3>
        <ol>
          <li>
            Start the interactive rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase -i HEAD~3</code>
            </div>
          </li>
          <li>
            In the editor, mark commits to squash:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <pre>
                <code>{`pick abc123 Add login feature
squash def456 Fix login styling
squash ghi789 Add login tests`}</code>
              </pre>
            </div>
          </li>
          <li>Edit the combined commit message in the next editor</li>
        </ol>

        <h3>Editing a Commit</h3>
        <ol>
          <li>
            Start interactive rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase -i HEAD~5</code>
            </div>
          </li>
          <li>
            Change &apos;pick&apos; to &apos;edit&apos; for the target commit:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <pre>
                <code>{`pick abc123 First commit
edit def456 Need to update this commit
pick ghi789 Third commit`}</code>
              </pre>
            </div>
          </li>
          <li>
            Make your changes:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add .</code>
              <br />
              <code>git commit --amend</code>
            </div>
          </li>
          <li>
            Continue the rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase --continue</code>
            </div>
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>Create a backup branch before starting</li>
            <li>Keep the number of commits being rebased manageable</li>
            <li>Write clear commit messages</li>
            <li>Test after completing the rebase</li>
          </ul>
        </div>

        <h2>Advanced Techniques</h2>

        <h3>Splitting a Commit</h3>
        <ol>
          <li>Mark the commit as &apos;edit&apos;</li>
          <li>
            Reset the commit but keep changes:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git reset HEAD^</code>
            </div>
          </li>
          <li>
            Stage and commit changes separately:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add file1.txt</code>
              <br />
              <code>git commit -m &quot;First part&quot;</code>
              <br />
              <code>git add file2.txt</code>
              <br />
              <code>git commit -m &quot;Second part&quot;</code>
            </div>
          </li>
          <li>
            Continue the rebase:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git rebase --continue</code>
            </div>
          </li>
        </ol>

        <h2>Troubleshooting</h2>

        <h3>Resolving Conflicts</h3>
        <ol>
          <li>Fix conflicts in the files</li>
          <li>
            Stage resolved files: <code>git add &lt;files&gt;</code>
          </li>
          <li>
            Continue: <code>git rebase --continue</code>
          </li>
          <li>
            Or abort: <code>git rebase --abort</code>
          </li>
        </ol>

        <h3>Common Issues</h3>
        <ul>
          <li>
            <strong>Empty commits</strong>: Use <code>--allow-empty</code> or
            drop the commit
          </li>
          <li>
            <strong>Lost commits</strong>: Use <code>git reflog</code> to
            recover
          </li>
          <li>
            <strong>Complex conflicts</strong>: Consider smaller rebases or
            using merge instead
          </li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
          <p className="text-red-700">
            <strong>Important:</strong> After modifying history with interactive
            rebase, you&apos;ll need to force push (
            <code>git push --force-with-lease</code>) if the branch was
            previously pushed to remote.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

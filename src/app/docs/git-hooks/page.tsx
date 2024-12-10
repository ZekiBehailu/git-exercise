import DocLayout from "../../../components/docs/DocLayout";

export default function GitHooksPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Hooks</h1>

        <p className="lead">
          Git hooks are scripts that Git executes before or after events such as
          commit, push, and receive. They let you customize Git&apos;s internal
          behavior and trigger customizable actions at key points.
        </p>

        <h2>Hook Locations</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>.git/hooks/</code> {/* Local hooks */}
          <br />
          <code>~/.git-template/hooks/</code> {/* Template hooks */}
        </div>

        <h2>Common Hook Types</h2>

        <h3>Client-Side Hooks</h3>
        <ul>
          <li>
            <code>pre-commit</code>: Runs before commit is created
            <ul>
              <li>Lint checking</li>
              <li>Running tests</li>
              <li>Code style verification</li>
            </ul>
          </li>
          <li>
            <code>prepare-commit-msg</code>: Runs before commit message editor
            <ul>
              <li>Template messages</li>
              <li>Issue number insertion</li>
            </ul>
          </li>
          <li>
            <code>commit-msg</code>: Validates commit message
            <ul>
              <li>Message format checking</li>
              <li>Issue reference validation</li>
            </ul>
          </li>
          <li>
            <code>post-commit</code>: Runs after commit is created
            <ul>
              <li>Team notifications</li>
              <li>CI/CD triggers</li>
            </ul>
          </li>
        </ul>

        <h3>Server-Side Hooks</h3>
        <ul>
          <li>
            <code>pre-receive</code>: Runs before refs are updated
            <ul>
              <li>Access control</li>
              <li>Policy enforcement</li>
            </ul>
          </li>
          <li>
            <code>update</code>: Similar to pre-receive but per branch
            <ul>
              <li>Branch-specific policies</li>
              <li>Protection rules</li>
            </ul>
          </li>
          <li>
            <code>post-receive</code>: Runs after push is completed
            <ul>
              <li>Deployment triggers</li>
              <li>Notifications</li>
            </ul>
          </li>
        </ul>

        <h2>Creating a Hook</h2>
        <ol>
          <li>
            Navigate to hooks directory:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>cd .git/hooks</code>
            </div>
          </li>
          <li>
            Create a new hook file:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>touch pre-commit</code>
              <br />
              <code>chmod +x pre-commit</code>
            </div>
          </li>
          <li>
            Edit the hook file:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <pre>
                <code>{`#!/bin/sh
npm run lint
npm test

# Exit with non-zero status if any command failed
exit $?`}</code>
              </pre>
            </div>
          </li>
        </ol>

        <h2>Example Hooks</h2>

        <h3>1. Enforce Commit Message Format</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`#!/bin/sh
# .git/hooks/commit-msg

commit_msg=$(cat "$1")
pattern="^(feat|fix|docs|style|refactor|test|chore):.+"

if ! echo "$commit_msg" | grep -qE "$pattern"; then
    echo "Error: Commit message format must be: <type>: <description>"
    exit 1
fi`}</code>
          </pre>
        </div>

        <h3>2. Prevent Commits to Main Branch</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`#!/bin/sh
# .git/hooks/pre-commit

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "main" ]; then
    echo "You can't commit directly to main branch"
    exit 1
fi`}</code>
          </pre>
        </div>

        <h3>3. Run Tests Before Push</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <pre>
            <code>{`#!/bin/sh
# .git/hooks/pre-push

npm test
exit $?`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practices:</strong>
          </p>
          <ul className="mt-2">
            <li>Keep hooks fast and focused</li>
            <li>Add error messages that explain how to fix issues</li>
            <li>Version control your hooks</li>
            <li>Document hook requirements</li>
          </ul>
        </div>

        <h2>Sharing Hooks with Team</h2>
        <p>
          Since hooks aren&apos;t copied when a repository is cloned, you can:
        </p>
        <ol>
          <li>
            Store hooks in a project directory:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>mkdir .githooks</code>
            </div>
          </li>
          <li>
            Configure Git to use custom hooks directory:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git config core.hooksPath .githooks</code>
            </div>
          </li>
          <li>
            Add hooks to version control:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git add .githooks</code>
            </div>
          </li>
        </ol>

        <h2>Troubleshooting</h2>

        <h3>Hook Not Executing</h3>
        <ul>
          <li>
            Check file permissions (<code>chmod +x hook-name</code>)
          </li>
          <li>Verify the hook name is exact (no extension)</li>
          <li>Check the shebang line is correct</li>
          <li>Ensure the hook is in the correct directory</li>
        </ul>

        <h3>Bypassing Hooks</h3>
        <p>
          For exceptional cases, you can bypass hooks using the{" "}
          <code>--no-verify</code> flag:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit --no-verify -m &quot;Emergency fix&quot;</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> Use <code>--no-verify</code> sparingly and
            document why it was necessary.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

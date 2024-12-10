import DocLayout from "../../../components/docs/DocLayout";

export default function QuickStartPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Quick Start Guide</h1>

        <p className="lead">
          Get up and running with Git in just a few minutes. This guide will
          walk you through the essential commands and workflows.
        </p>

        <h2>Creating Your First Repository</h2>
        <ol>
          <li>
            Create a new directory for your project:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>mkdir my-project</code>
              <br />
              <code>cd my-project</code>
            </div>
          </li>
          <li>
            Initialize a new Git repository:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git init</code>
            </div>
          </li>
        </ol>

        <h2>Basic Workflow</h2>
        <h3>1. Making Changes</h3>
        <p>Create or modify files in your project directory.</p>

        <h3>2. Checking Status</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git status</code>
        </div>
        <p>This shows which files have been modified, staged, or untracked.</p>

        <h3>3. Staging Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git add filename.txt</code> {/* Stage specific file */}
          <br />
          <code>git add .</code> {/* Stage all changes */}
        </div>

        <h3>4. Committing Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git commit -m &quot;Add initial files&quot;</code>
        </div>

        <h2>Working with Remote Repositories</h2>
        <h3>1. Adding a Remote</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>
            git remote add origin https://github.com/username/repository.git
          </code>
        </div>

        <h3>2. Pushing Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git push -u origin main</code>
        </div>

        <h3>3. Pulling Changes</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git pull origin main</code>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Tip:</strong> Always pull changes before starting new work
            to ensure you have the latest updates.
          </p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you know the basics, explore these topics:</p>
        <ul>
          <li>Creating and managing branches</li>
          <li>Resolving merge conflicts</li>
          <li>Using Git with different IDEs</li>
          <li>Collaborating with others</li>
        </ul>
      </div>
    </DocLayout>
  );
}

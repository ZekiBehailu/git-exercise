import DocLayout from "../../../components/docs/DocLayout";

export default function GitInitPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Git Init</h1>

        <p className="lead">
          The <code>git init</code> command creates a new Git repository. It can
          be used to convert an existing project to a Git repository or
          initialize a new, empty repository.
        </p>

        <h2>Basic Usage</h2>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git init</code>
        </div>
        <p>
          This command creates a new subdirectory named <code>.git</code> that
          contains all of your necessary repository files.
        </p>

        <h2>Common Options</h2>
        <ul>
          <li>
            <code>--bare</code>: Create a bare repository (no working directory)
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git init --bare</code>
            </div>
          </li>
          <li>
            <code>--quiet</code> or <code>-q</code>: Only print error and
            warning messages
          </li>
          <li>
            <code>--initial-branch=&lt;branch-name&gt;</code>: Use the specified
            name for the initial branch
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git init --initial-branch=main</code>
            </div>
          </li>
        </ul>

        <h2>Step-by-Step Example</h2>
        <ol>
          <li>
            Create a new directory for your project:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>mkdir my-new-project</code>
              <br />
              <code>cd my-new-project</code>
            </div>
          </li>
          <li>
            Initialize the repository:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>git init</code>
            </div>
          </li>
          <li>
            Verify the repository was created:
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <code>ls -la .git</code>
            </div>
          </li>
        </ol>

        <h2>What Happens When You Run git init?</h2>
        <p>When you run git init, Git:</p>
        <ul>
          <li>
            Creates a <code>.git</code> directory to store the repository data
          </li>
          <li>
            Sets up the necessary repository structure:
            <ul>
              <li>
                <code>objects/</code>: Stores all the content for your database
              </li>
              <li>
                <code>refs/</code>: Stores pointers to commit objects (branches)
              </li>
              <li>
                <code>HEAD</code>: Points to the currently checked out branch
              </li>
              <li>
                <code>config</code>: Project-specific configuration options
              </li>
            </ul>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Best Practice:</strong> Initialize a Git repository as early
            as possible in your project&apos;s lifecycle to track all changes
            from the beginning.
          </p>
        </div>

        <h2>Common Issues</h2>
        <h3>Reinitializing an Existing Repository</h3>
        <p>
          If you run <code>git init</code> in an existing repository, it will
          not override any existing settings or history. It&apos;s safe to run
          multiple times.
        </p>

        <h3>Wrong Initial Branch Name</h3>
        <p>
          If you need to change the initial branch name after initialization:
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <code>git branch -m old-name new-name</code>
        </div>
      </div>
    </DocLayout>
  );
}

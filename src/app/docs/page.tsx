import DocLayout from "../../components/docs/DocLayout";

export default function DocsPage() {
  return (
    <DocLayout>
      <div className="prose prose-indigo max-w-none">
        <h1>Introduction to Git</h1>
        <p className="lead">
          Git is a distributed version control system that helps you track
          changes in your code, collaborate with others, and maintain a complete
          history of your project.
        </p>

        <h2>What is Version Control?</h2>
        <p>
          Version control is a system that records changes to files over time so
          that you can recall specific versions later. It allows you to:
        </p>
        <ul>
          <li>Track changes in your code</li>
          <li>Revert files back to a previous state</li>
          <li>Compare changes over time</li>
          <li>Collaborate with others effectively</li>
          <li>See who made specific changes and when</li>
        </ul>

        <h2>Why Git?</h2>
        <p>
          Git has become the standard for version control because it offers:
        </p>
        <ul>
          <li>Distributed development</li>
          <li>Strong support for non-linear development</li>
          <li>Efficient handling of large projects</li>
          <li>Cryptographic authentication of history</li>
          <li>Toolkit-based design</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To begin your journey with Git, you&apos;ll need to:</p>
        <ol>
          <li>Install Git on your system</li>
          <li>Configure your Git environment</li>
          <li>Create your first repository</li>
          <li>Learn basic Git commands</li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-700">
            <strong>Tip:</strong> Follow our step-by-step guides in the sidebar
            to master Git at your own pace.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

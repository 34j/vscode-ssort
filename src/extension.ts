// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as core from "vscode-python-extension-core";
import { PackageInfo } from "vscode-python-extension-core";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const packageInfo: PackageInfo = {
    packageName: "ssort",
    packageDisplayName: "ssort",
    extensionName: "ssort",
    runCommandName: "ssort.run",
    runForWorkspaceCommandName: "ssort.runForWorkspace",
    packageConfigurationSection: "ssort.settings",
    useIntegratedTerminalConfigurationSectionFullName:
      "ssort.useIntegratedTerminal",
  };
  const disp = new core.commandDispatcher.EasyCommandDispatcher(
    context,
    packageInfo,
    new core.packageRunner.EasyOptionsBuilder(
      packageInfo,
      [], [], [], []
    )
  );
  disp.activate();
}

// this method is called when your extension is deactivated
export function deactivate() {}

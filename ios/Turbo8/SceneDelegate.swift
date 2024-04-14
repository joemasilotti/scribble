import Turbo
import TurboNavigator
import UIKit
import WebKit
import Strada

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?

  private let baseURL = URL(string: "http://localhost:3000")!
  private lazy var navigator = TurboNavigator(delegate: self, pathConfiguration: pathConfiguration)
  private lazy var pathConfiguration = PathConfiguration(sources: [
    .server(baseURL.appending(path: "configuration.json"))
  ])

  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    configureStrada()
    window?.rootViewController = navigator.rootViewController
    navigator.route(baseURL)
  }
  
  private func configureStrada() {
    TurboConfig.shared.userAgent += " \(Strada.userAgentSubstring(for: BridgeComponent.allTypes))"

    TurboConfig.shared.makeCustomWebView = { configuration in
      let webView = WKWebView(frame: .zero, configuration: configuration)
      Bridge.initialize(webView)
      return webView
    }
  }
}

extension SceneDelegate: TurboNavigationDelegate {
  func handle(proposal: VisitProposal) -> ProposalResult {
    .acceptCustom(WebViewController(url: proposal.url))
  }
}

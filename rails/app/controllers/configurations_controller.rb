class ConfigurationsController < ApplicationController
  def show
    render(
      json: {
        settings: {
          screenshots_enabled: true
        },
        rules: [
          {
            patterns: [
              ".*"
            ],
            properties: {
              context: "default",
              uri: "turbo://fragment/web",
              pull_to_refresh_enabled: false
            }
          },
          {
            patterns: [
              "/new$",
              "/edit$"
            ],
            properties: {
              context: "modal"
            }
          }
        ]
      }
    )
  end
end

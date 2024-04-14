package com.example.turbonative

import androidx.fragment.app.Fragment
import dev.hotwire.turbo.config.TurboPathConfiguration
import dev.hotwire.turbo.session.TurboSessionNavHostFragment
import kotlin.reflect.KClass

class MainSessionNavHostFragment : TurboSessionNavHostFragment() {
  override val sessionName = "main"
 // 192.168.0.233 
//  override val startLocation = "http://10.0.2.2:3000/"
  override val startLocation = "http://192.168.0.233:3000/"
  override val registeredFragments: List<KClass<out Fragment>>
    get() = listOf(
      WebFragment::class
    )

  override fun onSessionCreated() { 
    super.onSessionCreated()
    session.webView.settings.userAgentString = "Turbo Native Android"
  } 
  
  override val pathConfigurationLocation: TurboPathConfiguration.Location
    get() = TurboPathConfiguration.Location(    
            assetFilePath = "json/configuration.json"
        )
}

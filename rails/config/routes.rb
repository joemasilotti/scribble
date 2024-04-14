Rails.application.routes.draw do
  resource(:configuration, only: :show)

  get("/home", to: "general#index", as: "home")
  get("/about", to: "general#about", as: "about")
  get("/about", to: "general#contact", as: "contact")
  get("/notes", to: "notes#index", as: "notes")

  root("notes#test")
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  resources :favorites
  resources :schools
  
  post '/signup', to: 'users#create'
  post '/signin', to: 'users#authenticate'
  post '/addFavorites', to: 'favorites#addToFavorites'
  get '/favoriteSchools/:id', to: "favorites#myFavorite"
  delete '/favoriteSchools/:id/:school_id', to: "favorites#destroy"

  
end

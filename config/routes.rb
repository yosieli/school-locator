Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  resources :favorites
  resources :schools
  # resources :users

  post '/signup', to: 'users#create'
  post '/signin', to: 'users#authenticate'

end

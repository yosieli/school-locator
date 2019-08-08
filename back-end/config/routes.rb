Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  resources :favorites
  resources :schools

  post '/signup', to: 'users#create'
  get '/signin', to: 'users#authenticate'

end

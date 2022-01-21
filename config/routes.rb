Rails.application.routes.draw do
  resources :drink_orders, only:[]
  resources :orders, only:[:create, :update]
  resources :drinks, only:[:create, :index, :destory]
  resources :users, only:[]

  get '/me', to: "users#show"

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"


  
end

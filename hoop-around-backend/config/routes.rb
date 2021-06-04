Rails.application.routes.draw do

  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  
  namespace :api do
    namespace :v1 do
      resources :registrations
      resources :tournaments
      resources :teams
      # resources :players
      # resources :coaches
      resources :users
      resources :lists
      
       post '/logout', to: "sessions#destroy" 
    
      #   get "/auth/facebook/callback", to: "sessions#create_with_fb"
    end
  end

   
end

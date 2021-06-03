Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :registrations
      resources :tournaments
      resources :teams
      resources :players
      resources :coaches
      resources :lists
    
      # get '/signup', to: "coaches#new", as: "signup" 
      #   post '/signup', to: "coaches#create"
    
      #   get '/login', to: "sessions#new", as: "login" 
      #   post '/login', to: "sessions#create"
      #   post '/logout', to: "sessions#destroy" 
    
      #   get "/auth/facebook/callback", to: "sessions#create_with_fb"
    end
  end

   
end

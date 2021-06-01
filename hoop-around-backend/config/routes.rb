Rails.application.routes.draw do
  resources :registrations
  resources :tournaments
  resources :teams
  resources :players
  resources :coaches
  resources :lists
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

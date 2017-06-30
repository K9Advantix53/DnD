Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'characters#home'

  namespace :api do
    namespace :v1 do
      resources :equipments
    end
  end

  namespace :api do
    namespace :v1 do
      resources :spells
    end
  end
end

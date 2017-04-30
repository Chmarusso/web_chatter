Rails.application.routes.draw do
  mount ResqueWeb::Engine => "/resque_web"
  mount ActionCable.server => '/cable'
  root to: 'home#index'
  get 'hello_world', to: 'hello_world#index'

  namespace :api do
    namespace :v1 do
      resources :user_sessions, only: [:create]
    end
  end
end
class Api::V1::BaseController < ApplicationController
  protect_from_forgery prepend: true

  rescue_from ActionController::ParameterMissing do |e|
    render json: { error: e.message }, status: :unprocessable_entity
  end

  rescue_from AuthenticateUser::UserNotFound do |e|
    render json: { error: 'User not found.' }, status: :not_found
  end

end

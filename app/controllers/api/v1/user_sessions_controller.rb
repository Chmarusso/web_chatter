class Api::V1::UserSessionsController < Api::V1::BaseController
  def create
    @user = AuthenticateUser.call(email, password)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def email
    user_params[:email]
  end

  def password
    user_params[:password]
  end
end

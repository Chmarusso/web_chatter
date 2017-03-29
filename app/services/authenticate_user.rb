class AuthenticateUser
  class UserNotFound < StandardError; end
  
  class << self
    def call(email, password)
      user = User.find_by(email: email).try(:authenticate, password)
      fail UserNotFound unless user

      user
    end
  end
end

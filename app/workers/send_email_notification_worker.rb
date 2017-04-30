class SendEmailNotificationWorker
  @queue = :emailing

  def self.perform(user_id)
    user = User.find(user_id)
    NewCustomerNotification.call(user_id)
  end
end
FactoryGirl.define do
  factory :user do
    full_name 'John Doe'
    email 'John@Doe.com'
    password 'secret123'
    password_confirmation 'secret123'
  end
end

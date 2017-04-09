require 'rails_helper'

describe 'POST /api/v1/user_sessions' do
  let(:url) { '/api/v1/user_sessions' }

  context 'when no params given' do
    it 'returns 422 status' do
      post url, params: {}
      expect(response.status).to eq 422
    end
  end

  context 'when params given' do
    context 'and credentials are valid' do
      let(:email) { 'valid@user.com'}
      let(:password) { 'secret123' }
      let!(:user) do
        create(:user, email: email, password: password, full_name: 'Valid User')
      end

      let(:params) do
        {
          user: {
            email: email,
            password: password
          }
        }
      end

      before do
        post url, params: params
      end

      subject { JSON.parse(response.body) }

      it 'returns 200 status' do
        expect(response.status).to eq 200
      end

      it 'returns user id' do
        expect(subject['id']).to eq user.id
      end

      it 'returns user full name' do
        expect(subject['full_name']).to eq user.full_name
      end

      it 'returns user email' do
        expect(subject['email']).to eq user.email
      end
    end

    context 'and credentials are invalid' do
      let(:params) do
        {
          user: {
            email: 'johon@doe.com',
            password: 'wrong'
          }
        }
      end

      before do
        post url, params: params
      end

      it 'returns 404 status' do
        post url, params: params
        expect(response.status).to eq 404
      end

      it 'returns proper error' do
        post url, params: params
        json = JSON.parse(response.body)
        expect(json['error']).to eq 'User not found.'
      end
    end
  end
end

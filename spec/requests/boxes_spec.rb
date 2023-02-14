require 'rails_helper'

RSpec.describe "Boxes", type: :request do
  describe "GET /index" do
    it 'returns a list of boxes' do 
      
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.boxes.create(
        name: "James Quillen",
        contents: "toothbrush and underwear",
        size: "small",
        user_id: 1,
      )

      get '/boxes'

      box = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(box.length).to eq(1)
      
    end
  end
end

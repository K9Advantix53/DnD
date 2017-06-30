class Api::V1::CharactersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    body=request.body.read
    parsed=JSON.parse(body)
    binding.pry
    character=Character.new(parsed)
    binding.pry
    character.user_id = current_user.id
    character.name = current_user.name
    binding.pry
    if character.save
      render json: { message: ["It worked!"]}
    else
      render json: { message: character.errors.full_messages}
    end
  end
end

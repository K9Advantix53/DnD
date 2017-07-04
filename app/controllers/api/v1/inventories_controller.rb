class Api::V1::InventoriesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    body=request.body.read
    parsed=JSON.parse(body)
    inventory=Inventory.new(parsed)
    character.user_id = current_user.id
    character.name = current_user.name
    if character.save
      render json: { message: ["It worked!"]}
    else
      render json: { message: character.errors.full_messages}
    end
  end
end

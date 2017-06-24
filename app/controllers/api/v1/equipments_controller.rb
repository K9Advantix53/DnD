class Api::V1::EquipmentsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    @equipments=Equipment.all
    if params[:search]
      search=params[:search]
      @equipments=Equipment.where("name ilike ?", "%#{search}%")
      render json: @equipments
    else
      @equipments=Equipment.all.order("created_at DESC")
    end
  end

  private

  def search_params
    params.permit(:search)
  end
end

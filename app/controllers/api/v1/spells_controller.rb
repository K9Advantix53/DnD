class Api::V1::SpellsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    @spells=Spell.all
    if params[:search]
      search=params[:search]
      @spells=Spell.where("name ilike ?", "%#{search}%")
      render json: @spells
    else
      @spells=Spell.all.order("created_at DESC")
    end
  end

  private

  def search_params
    params.permit(:search)
  end
end

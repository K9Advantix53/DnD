class CharactersController < ApplicationController
  def home
    @current_user=current_user
  end

  def index
    @characters = current_user.characters
  end

  def show
    @character=Character.find(params[:id])
  end

  def create
  end

  def edit
    @character=Character.find(params[:id])
    @creation_stats=[nil,15,14,13,12,10,8]
  end

  def update
    @character=Character.find(params[:id])
    @character.update(character_params)

    if character_params['strength'].to_i == 15 || character_params['strength'].to_i == 14
      @character.strength_mod = 2
    elsif character_params['strength'].to_i == 13 || character_params['strength'].to_i == 12
      @character.strength_mod = 1
    elsif character_params['strength'].to_i == 10
      @character.strength_mod = 0
    elsif character_params['strength'].to_i == 8
      @character.strength_mod = (-1)
    end

    if character_params['dexterity'].to_i == 15 || character_params['dexterity'].to_i == 14
      @character.dexterity_mod = 2
    elsif character_params['dexterity'].to_i == 13 || character_params['dexterity'].to_i == 12
      @character.dexterity_mod = 1
    elsif character_params['dexterity'].to_i == 10
      @character.dexterity_mod = 0
    elsif character_params['dexterity'].to_i == 8
      @character.dexterity_mod = (-1)
    end

    if character_params['constitution'].to_i == 15 || character_params['constitution'].to_i == 14
      @character.constitution_mod = 2
    elsif character_params['constitution'].to_i == 13 || character_params['constitution'].to_i == 12
      @character.constitution_mod = 1
    elsif character_params['constitution'].to_i == 10
      @character.constitution_mod = 0
    elsif character_params['constitution'].to_i == 8
      @character.constitution_mod = (-1)
    end

    if character_params['intelligence'].to_i == 15 || character_params['intelligence'].to_i == 14
      @character.intelligence_mod = 2
    elsif character_params['intelligence'].to_i == 13 || character_params['intelligence'].to_i == 12
      @character.intelligence_mod = 1
    elsif character_params['intelligence'].to_i == 10
      @character.intelligence_mod = 0
    elsif character_params['intelligence'].to_i == 8
      @character.intelligence_mod = (-1)
    end

    if character_params['wisdom'].to_i == 15 || character_params['wisdom'].to_i == 14
      @character.wisdom_mod = 2
    elsif character_params['wisdom'].to_i == 13 || character_params['wisdom'].to_i == 12
      @character.wisdom_mod = 1
    elsif character_params['wisdom'].to_i == 10
      @character.wisdom_mod = 0
    elsif character_params['wisdom'].to_i == 8
      @character.wisdom_mod = (-1)
    end

    if character_params['charisma'].to_i == 15 || character_params['charisma'].to_i == 14
      @character.charisma_mod = 2
    elsif character_params['charisma'].to_i == 13 || character_params['charisma'].to_i == 12
      @character.charisma_mod = 1
    elsif character_params['charisma'].to_i == 10
      @character.charisma_mod = 0
    elsif character_params['charisma'].to_i == 8
      @character.charisma_mod = (-1)
    end

    @character.maximum_hp = 10 + @character.constitution_mod
    @character.current_hp = @character.maximum_hp

    redirect_to character_path(@character)
  end

  def destroy
    @character=Character.find(params[:id])
    @character.destroy
    redirect_to characters_path
  end

  private

  def character_params
    params.require(:character).permit(:strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma, :race, :alignment)
  end
end

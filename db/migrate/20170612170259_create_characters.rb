class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :profession, null: false
      t.string :race
      t.integer :level, null: false, default: 0
      t.integer :exp, default: 0
      t.string :alignment
      t.text :background

      t.integer :maximum_hp
      t.integer :current_hp
      t.integer :armor_class

      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      t.integer :strength_mod
      t.integer :dexterity_mod
      t.integer :constitution_mod
      t.integer :intelligence_mod
      t.integer :wisdom_mod
      t.integer :charisma_mod

      t.integer :hit_dice, null: false

      t.belongs_to :user
    end
  end
end

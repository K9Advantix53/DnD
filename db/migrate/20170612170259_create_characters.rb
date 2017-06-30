class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :class, null: false
      t.string :race, null: false
      t.integer :level, null: false, default: 0
      t.integer :exp, default: 0
      t.string :alignment, null: false
      t.text :background

      t.integer :maximum_hp, null: false
      t.integer :current_hp, null: false
      t.integer :armor_class, null: false

      t.integer :strength, null: false
      t.integer :dexterity, null: false
      t.integer :constitution, null: false
      t.integer :intelligence, null: false
      t.integer :wisdom, null: false
      t.integer :charisma, null: false

      t.integer :strength_mod, null: false
      t.integer :dexterity_mod, null: false
      t.integer :constitution_mod, null: false
      t.integer :intelligence_mod, null: false
      t.integer :wisdom_mod, null: false
      t.integer :charisma_mod, null: false

      t.integer :hit_dice, null: false

      t.belongs_to :user 
    end
  end
end

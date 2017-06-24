class CreateSpells < ActiveRecord::Migration[5.0]
  def change
    create_table :spells do |t|
      t.string :name, null: false
      t.string :url, null: false
    end
  end
end

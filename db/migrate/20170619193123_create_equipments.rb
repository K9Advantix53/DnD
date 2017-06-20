class CreateEquipments < ActiveRecord::Migration[5.0]
  def change
    create_table :equipments do |t|
      t.string :name, null: false
      t.string :url, null: false
    end
  end
end

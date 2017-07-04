class CreateInventory < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.belongs_to :character
      t.belongs_to :equipment
    end
  end
end

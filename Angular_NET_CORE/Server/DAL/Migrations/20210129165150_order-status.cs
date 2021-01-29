using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class orderstatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_productSizes_ProductSizeId",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_productSizes",
                table: "productSizes");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Size",
                table: "Products");

            migrationBuilder.RenameTable(
                name: "productSizes",
                newName: "ProductSizes");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Orders",
                newName: "OrderStatusId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductSizes",
                table: "ProductSizes",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "OrderStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatuses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderStatusId",
                table: "Orders",
                column: "OrderStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_OrderStatuses_OrderStatusId",
                table: "Orders",
                column: "OrderStatusId",
                principalTable: "OrderStatuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductSizes_ProductSizeId",
                table: "Products",
                column: "ProductSizeId",
                principalTable: "ProductSizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_OrderStatuses_OrderStatusId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductSizes_ProductSizeId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "OrderStatuses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductSizes",
                table: "ProductSizes");

            migrationBuilder.DropIndex(
                name: "IX_Orders_OrderStatusId",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "ProductSizes",
                newName: "productSizes");

            migrationBuilder.RenameColumn(
                name: "OrderStatusId",
                table: "Orders",
                newName: "Status");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Size",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_productSizes",
                table: "productSizes",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_productSizes_ProductSizeId",
                table: "Products",
                column: "ProductSizeId",
                principalTable: "productSizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

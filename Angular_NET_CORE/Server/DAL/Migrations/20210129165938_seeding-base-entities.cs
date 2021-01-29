using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class seedingbaseentities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "OrderStatuses",
                columns: new[] { "Id", "Status" },
                values: new object[,]
                {
                    { 1, "New" },
                    { 2, "Paid" },
                    { 3, "Shipped" },
                    { 4, "Delivered" },
                    { 5, "Closed" }
                });

            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "Id", "Category" },
                values: new object[,]
                {
                    { 1, "Food" },
                    { 2, "Cloth" },
                    { 3, "Book" },
                    { 4, "Electronic" },
                    { 5, "Toys" }
                });

            migrationBuilder.InsertData(
                table: "ProductSizes",
                columns: new[] { "Id", "Size" },
                values: new object[,]
                {
                    { 1, "Small" },
                    { 2, "Medium" },
                    { 3, "Large" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OrderStatuses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "OrderStatuses",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "OrderStatuses",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "OrderStatuses",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "OrderStatuses",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "ProductSizes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductSizes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ProductSizes",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}

const ReturnPolicy = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-48 bg-[#F9F9F9]">
        <h1 className="text-3xl text-dark-blue font-bold">Return Policy</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 py-12 lg:px-24">
        <div className="mb-4">
          <h3 className="font-bold text-[40px] text-[#242424]">Introduction</h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Thanks for shopping with Jenari!
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            We want you to be happy with your purchases, so we offer refunds for
            both perishable and non-perishable items within six (6) hours of
            delivery.To learn more about our refund policy, please read this
            guide. But please keep in mind that once you&apos;ve paid for food
            items, you can&apos;t cancel your order on the day of delivery. If
            you do need a refund, we&apos;ll process it through either your
            Jenari wallet or your bank account, unless our refund policy says
            otherwise.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-[28px] text-[#242424]">
            Guidelines for Refund
          </h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            If we are unable to provide a food item you ordered at the requested
            time and your order is less than £25 (twenty five pounds), we will
            refund the amount to your Jenari wallet. You can use this refund to
            buy other items immediately or at a later time. If your order is
            above £25 (twenty five pounds), we can refund the amount to your
            Jenari wallet or directly to your bank account, whichever you
            prefer. If the food item delivered is inadequate, we will only
            refund the amount to your Jenari wallet.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            N.B: Please note that all returns/refunds will be considered on a
            case-by-case basis, taking into account the availability of the food
            item, logistics, and reasonable grounds.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-[28px] text-[#242424]">
            Eligibility for Refund
          </h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Perishable Food Items: Our refund policy for perishable food items
            covers a variety of products, including fresh tomatoes, fresh
            peppers, meat, fish, and fruits and vegetables. If you are
            unsatisfied with the quality of these items, you may request a
            refund within six (6) hours of receiving your delivery.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            To be eligible for a refund, you must have made a complaint to
            Jenari on the day of delivery and provided picture or video evidence
            of the unsatisfactory order.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            We typically require visual evidence to ensure that we can process
            your refund or return promptly.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Non-Perishable Food Items: Our refund policy applies to various food
            items such as Grains (Rice, Beans, Corn), Roots (Plantain,
            Potatoes), Tubers (Yams), and other dry items (spices). If you
            receive any of these items and wish to return them, you must do so
            within 72 hours of delivery.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            However, there is a prerequisite for this return and refund to take
            place. You need to have lodged a valid complaint within six (6)
            hours of receiving the food items.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Our team at Jenari will confirm your complaint, and we may request
            picture evidence to ensure a smooth return or refund process.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-[28px] text-[#242424]">
            Exempted Food Items for Return/Refunds
          </h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Under this policy, Jenari will not accept any returns or issue
            refunds for any food items (regardless of whether they are
            perishable or non-perishable) unless a valid complaint is filed
            within 6 hours of receipt of delivery and confirmed by Jenari.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-[28px] text-[#242424]">
            Delayed Refunds
          </h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            Once Jenari confirms your refund, kindly check your Jenari wallet or
            bank account to confirm if the refund has been processed.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            If the refund was sent directly to your bank account, please allow
            some time for the refund to be officially posted by your bank.
          </p>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            In case you have checked your accounts and have not received your
            refund, please contact us at hello@jenari.co.uk, via WhatsApp at
            07879315979, or call 07879315979 for assistance.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-[28px] text-[#242424]">
            Cost of Transportation for Returns
          </h3>
          <p className="pt-2 font-normal text-base text-[#626C7A]">
            If food items are defective or the customer has a valid complaint
            registered with Jenari, the cost of transportation for the return of
            the items will be covered by Jenari. However, if the customer
            rescinds or changes an initial order, they will be responsible for
            bearing the cost of transportation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
